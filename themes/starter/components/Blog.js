/* eslint-disable @next/next/no-img-element */
import { siteConfig } from '@/lib/config'
import Link from 'next/link'

/**
 * 博文列表
 * @param {*} param0
 * @returns
 */
export const Blog = ({ posts }) => {
  // 新增：對文章進行排序，從最新開始顯示
  const sortedPosts = posts?.slice().sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  return (
    <>
      {/* <!-- ====== Blog Section Start --> */}
      <section className='bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]'>
        <div className='container mx-auto'>
          {/* 區塊標題文字 */}
          <div className='-mx-4 flex flex-wrap justify-center'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[485px] text-center'>
                <span className='mb-2 block text-lg font-semibold text-[#a61b29]'>
                  {siteConfig('STARTER_BLOG_TITLE')}
                </span>
                <h2 className='mb-4 text-3xl font-bold text-dark dark:text-[#a61b29] sm:text-4xl md:text-[40px] md:leading-[1.2]'>
                  {siteConfig('STARTER_BLOG_TEXT_1')}
                </h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: siteConfig('STARTER_BLOG_TEXT_2')
                  }}
                  className='text-base text-body-color dark:text-dark-6'></p>
              </div>
            </div>
          </div>
          {/* 博客列表 此處優先展示3片文章 */}
          <div className='-mx-4 flex flex-wrap'>
            {/* 修改：使用排序後的文章列表 */}
            {sortedPosts?.map((item, index) => {
              return (
                <div key={index} className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mb-10'
                    data-wow-delay='.1s'>
                    <div className='mb-8 overflow-hidden rounded-[5px]'>
                      <Link href={item?.href} className='block'>
                        <img
                          src={item.pageCoverThumbnail}
                          alt={item.title}
                          className='w-full transition group-hover: group-hover:scale-105'
                        />
                      </Link>
                    </div>
                    <div>
                      <span className='mb-6 inline-block rounded-[5px] bg-[#a61b29] px-4 py-0.5 text-center text-xs font-medium leading-loose text-white'>
                        {item.publishDay}
                      </span>
                      <h3>
                        <Link
                          href={item?.href}
                          className='mb-4 inline-block text-xl font-semibold text-dark hover:text-[#a61b29] dark:text-white dark:hover:text-[#a61b29] sm:text-2xl lg:text-xl xl:text-2xl'>
                          {item.title}
                        </Link>
                      </h3>
                      <p className='max-w-[370px] text-base text-body-color dark:text-dark-6'>
                        {item.summary}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* <!-- ====== Blog Section End --> */}
    </>
  )
}
