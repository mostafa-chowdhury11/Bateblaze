import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Contact = () => {
    const blog=useLoaderData()
    const {comments_count,
        description,
        tags,
        user, 
        title, 
published_at,
reading_time_minutes,
public_reactions_count,
cover_image

 }=blog;
    return (
        <div>
        <div rel="noopener noreferrer" href="#" className=" mx-auto group    
         hover:border-primary border-gray-200     hover:no-underline focus:no-underline bg-gray-100 p-4 hidden sm:block">
              <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || jssljmg}/>
              <div className="p-6 space-y-2">
                  <h3 className="text-1xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                  <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                  <p>{description.slice(0,20).trim( )}</p>
              </div>
              <div>
		<div className="flex flex-wrap py-6 gap-2  border-gray-100">
     {
		tags.map(tag=><a
		key={tag}
		className='text-1xl font-bold '
		>#{tag}</a>)
	 }
		</div>
		<div className="space-y-2">
			<h4 className="text-lg font-semibold">Related posts</h4>
			<ul className="ml-4 space-y-1 list-disc">
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
				</li>
			</ul>
		</div>
	</div>
          </div>
  </div>
    );
};

export default Contact;