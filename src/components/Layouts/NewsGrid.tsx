'use client'
import * as React from 'react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import type { Post } from '@/payload-types'
import { Media } from '@/components/Payload/Media'
import { ImageProps } from '@/common-types'
import Image from 'next/image'



export interface BlogProps {
  image: ImageProps
  authors?: { name: string; image?: ImageProps }[]
  categories?: string[]
  commentCount: string
  title: string
  description: string
  slug: string
  publishedAt: string
  meta: Post['meta']
}

export function NewsGrid({ blogs }: { blogs: BlogProps[] }) { 


  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs &&
          blogs.map((post, id) => (
            <Link
              key={id}
              href={`/insights/${post.slug}`}
              className="group rounded-lg overflow-hidden border bg-card text-card-foreground shadow hover:shadow-lg transition-shadow"
            >
              {post.image && (
                        <Image
                          src={post.image.src}
                          alt='post image'
                          width={850}
                          height={575}
                          sizes="33vw"
                          className="relative inset-0 size-full rounded-2xl bg-gray-50 object-cover"
              
                        />
                      )}

              {/* <Image
              src={post.meta?.image.}
              alt=""
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            /> */}
              {/* { post.image && typeof post.image !== 'string' && (
                <Media resource={post.image} size="33vw" />
              )} */}

              <div className="p-4 relative bottom-0 left-0 right-0 bg-gradient-to-t from-card-foreground to-transparent">
                <div className="text-sm text-muted-foreground mb-2">
                  {post.authors &&
                    post.authors.map((author) => {
                      return `${author.name} · `
                    })}
                  
                  {post.publishedAt &&
                    new Date(post.publishedAt).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                    })}
                </div>
                <h2 className="text-xl font-bold mb-4 text-primary group-hover:text-accent group-hover:scale-105 transition-transform duration-200 ease-in-out">
                  {post.title}
                </h2>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
