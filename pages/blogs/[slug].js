import { Row, Col, Card, Image, Spinner } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getBlogBySlug, getPaginatedBlogs } from "lib/api";
import ShareSocial from "components/ShareSocial";
import BlogContent from "components/BlogContent";
import { urlFor } from "lib/api";
import moment from "moment";
import { PreviewAlert } from "components/PreviewAlert";
import Aside from "components/Aside";

function BlogDetails({ blog, preview }) {
  const router = useRouter();

  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode='404' />;
  }

  if (router.isFallback) {
    return (
      <PageLayout className='center'>
        <div>
          <Spinner animation='border' variant='danger' />
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout className='container'>
      <Row className='mb-5'>
        <div className='wrapper-lg no-border'>
          <main className='main-content no-pad'>
            {preview && <PreviewAlert />}
            <div className='archive-description'>
              <h1>Top WordPress News</h1>
              <p>
                WPBeginner's WordPress News keep you updated with what's hot in
                the WordPress industry. Stay updated with WordPress releases,
                major announcements, exclusive WordPress deals, and much more.
              </p>
            </div>

            <Card
              className={`fj-card fj-card-list card-wrapper card-wrapper-1`}
            >
              <div className='card-body-wrapper card-body-wrapper-1'>
                <Card.Body className='card-body-1'>
                  <Card.Title className='card-main-title'>
                    {blog.title}
                  </Card.Title>
                  <div className='authorInfo'>
                    Posted on {moment(blog.date).format("LLLL")} by{" "}
                    <span className='orange-text'>{blog.author.name}</span>
                  </div>
                </Card.Body>
              </div>
            </Card>

            <ShareSocial />
            {blog.coverImage && (
              <Image
                width='100%'
                src={urlFor(blog.coverImage).height(300).url()}
                alt=''
                className='img-fluid rounded mb-2 pb-4'
              />
            )}

            {blog.content && <BlogContent content={blog.content} />}
          </main>
        </div>
        {/* Aside */}
        <Aside />
      </Row>
    </PageLayout>
  );
}

export default BlogDetails;

export async function getStaticProps({ params, preview = false, previewData }) {
  const blog = await getBlogBySlug(params.slug, preview);
  return {
    props: {
      blog,
      preview,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const blogs = await getPaginatedBlogs();
  const paths = blogs?.map((b) => {
    return {
      params: { slug: b.slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
}