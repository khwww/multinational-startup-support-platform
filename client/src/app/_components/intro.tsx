import { CMS_NAME } from '@/lib/constants';
import Link from 'next/link';

export function Intro() {
  return (
    <section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
      <h1 className='text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>
        G - Start Up
      </h1>
<<<<<<< HEAD
      
      <h2>
        <a
          href="/posts/space/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          창업 공간
        </a>
      </h2>
      <h2>
        <a
          href="/posts/community/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          커뮤니티
        </a>
      </h2>
      
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and {CMS_NAME}.
      </h4>
=======
      <nav>
        <ul className='flex'>
          <li className='mr-6'>
            <Link as={`/`} href='/' className='hover:underline'>
              홈
            </Link>
          </li>
          <li className='mr-6'>
            <Link
              as={`/business-notice`}
              href='/business-notice'
              className='hover:underline'
            >
              사업공고
            </Link>
          </li>
          <li className='mr-6'>
            <Link
              as={`/card-news`}
              href='/card-news'
              className='hover:underline'
            >
              카드 뉴스
            </Link>
          </li>
          <li className='mr-6'>
            <Link
              as={`/startup-space`}
              href='/startup-space'
              className='hover:underline'
            >
              창업공간
            </Link>
          </li>
          <li className='mr-6'>
            <Link
              as={`/experience-share`}
              href='/experience-share'
              className='hover:underline'
            >
              경험 공유
            </Link>
          </li>
        </ul>
      </nav>
>>>>>>> main
    </section>
  );
}
