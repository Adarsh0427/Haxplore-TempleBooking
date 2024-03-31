import prisma from '@/app/libs/prismadb';
import { temples } from "@/app/lib/placeholder-data";

interface IParams {
  listingId?: string;
}

export default async function getListingbyID(params: IParams) {
  try {
    const { listingId } = params;
    const listing = temples.find(listing => listing.id == listingId);
    /*
    const listing = await prisma.listing.findUnique({
      where: { id: listingId },
      include: { user: true },
    });
    */

    if (!listing) {
      return null;
    }
    return {
      ...listing,
      createdAt: listing.createdAt.toISOString(),
      user: null,
      /*
      user: {
        ...listing.user,
        createdAt: listing.user.createdAt.toISOString(),
        updatedAt: listing.user.updatedAt.toISOString(),
        emailVerified: listing.user.emailVerified?.toISOString() || null,
      },
      */
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
