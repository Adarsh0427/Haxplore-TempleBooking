import prisma from "@/app/libs/prismadb";
import { temples } from "@/app/lib/placeholder-data";

export interface IListingsParams {
  userId?: string;
  startDate?: string;
  startTime?: string;
  locationValue?: string;
  Destination?: string;
  category?: string;
}

export default async function getListings(params: IListingsParams) {
  try {
    const { category, userId, startDate, locationValue, Destination } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }
    if (locationValue) {
      query.locationValue = locationValue;
    }
    if (Destination) {
      query.Destination = Destination;
    }

    if (startDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                startDate: { lte: startDate },
              },
              {
                startDate: { lte: startDate },
              },
            ],
          },
        },
      };
    }

    const listings = temples;
    
    /*
    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });
    */
    
    // console.log(listings[0]);

    const safeListings = listings.map(listing => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
