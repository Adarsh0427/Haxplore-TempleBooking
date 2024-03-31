import ClientOnly from './ClientOnly';
import Container from './components/Container';
import EmptyState from './components/EmptyState';
import getListings, { IListingsParams } from './actions/getListings';
import ListingCard from './components/listings/ListingCard';
import getCurrentUser from './actions/getCurrentUser';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 60;

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  console.log(listings.length, searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Container>
        <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-12">
        {/* <div className="pt-20 flex flex-wrap justify-evenly flex-1 gap-8"> */}
          {listings.map(listing => (
              <ListingCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
