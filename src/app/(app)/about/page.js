import React from 'react'
import SectionHeading from '@/components/SectionHeading'
import Card from '@/components/Card';
import Image from 'next/image';

const About = () => {
	return (
		<>
			<SectionHeading title="My Story" />
			<Card>
				<p className="my-2 px-3">
					Born in Los Angeles, California, Jason Malabute, an MBA, is a seasoned
					Real Estate Investor, an active Philanthropist, and a CPA (Certified
					Public Accountant). Despite being born with a condition called
					‘Cerebral Palsy’ that affects speech and muscle movement, Jason
					Malabute never took it as an excuse and used his disability as a
					motivation instead. When asked about his motivation, “I want to be a
					role model to kids with disabilities and kids from low-income
					neighborhoods of what is possible”, is what he said.
				</p>

				<p className="my-2 px-3">
					Jason Malabute started his real estate journey in 2018 and studied
					real estate for 1 whole year before finally investing in three rentals
					in the very first year of 2019, in Indianapolis. After successfully
					following the investment strategy called BRRRR (Buy, Rehab, Rent,
					Refinance, and Repeat) for multiple properties, Mr Malabute took the
					leap from single-family to multifamily investing under the mentorship
					of Sterling White. Sterling White is the founder of Sonders Investment
					Group and is involved with both buying and selling over 100 single
					family homes. Mr. White has recently scaled his portfolio to just
					under 500 multi family apartment units.
				</p>

				<p className="my-2 px-3">
					Following the footsteps of Sterling White, today, Jason Malabute is
					the proud owner of Malabute Properties LLC and has recently exited out
					from all the single-family homes in 2021. He has now totally submerged
					into the multifamily investing in Indianapolis and Kansas City areas,
					where his prime interest remains in acquiring 6-30 unit apartment
					buildings.
				</p>
				<p className="my-2 px-3">
					While talking about his favorite books, Jason Malabute tenderly
					mentions “Long-Distance Real Estate Investing; How to Buy, Rehab, and
					Manage Out-of-State Rental Properties” by David Greene; The 10x Rule
					by Grant Cardone, and Rich Dad Poor Dad by Robert T. Kiyosaki. Apart
					from reading and learning more about real estate, Jason is highly
					interested in working out, traveling, attending sports events,
					blogging (on Bigger Pockets), and spending time with friends and
					family. “Sky’s the limit”, is what he truly believes in and strives to
					show by his work.
				</p>
			</Card>
			<Card>
				<div className="flex mx-auto flex-col items-center bg-white md:flex-row w-full max-w-6xl dark:border-gray-700 dark:bg-gray-800">
					<Image
						className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
						src={"/jason-profile.jpg"}
						alt="Jason Malabute Profile"
						width={384}
						height={192}
					/>
					<div className="flex flex-col justify-between p-4 leading-normal">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Jason Malabute
						</h5>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Jason Malabute, CPA, has been in the accounting industry since
							2013. Over the years, he has honed his skills in tax preparation,
							tax planning, accounting, and payroll services, specifically
							working with high-net-worth individuals involved in real estate.
							His extensive experience has equipped him to address the unique
							financial needs and challenges that come with real estate
							investments. On the real estate side, Jason is not just an
							accountant but also an active investor. Since 2019, he has built a
							diverse portfolio that includes out-of-state rental properties,
							single-family homes, and large multi-family deals. He has
							successfully implemented buy-and-hold and BRRRR strategies and
							currently serves as a general partner on two multi-family
							syndication deals totaling 342 units. His combined expertise in
							accounting and real estate investment allows him to offer
							unparalleled insights and services to his clients.
						</p>
					</div>
				</div>
			</Card>
		</>
	);
}

export default About
