import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Building2,
  Calendar,
  Clock,
  Users,
  Monitor,
  Coffee,
  Car,
  Plus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Facilities() {
  const navigate = useNavigate();

  const facilities = [
    {
      id: 1,
      name: "Conference Room A",
      type: "Meeting Room",
      capacity: 12,
      amenities: ["Projector", "Whiteboard", "Video Conference"],
      location: "Floor 2",
      availability: "Available",
      icon: Monitor,
    },
    {
      id: 2,
      name: "Executive Boardroom",
      type: "Boardroom",
      capacity: 8,
      amenities: ["Large Display", "Phone Conference", "Premium Seating"],
      location: "Floor 3",
      availability: "Occupied",
      icon: Building2,
    },
    {
      id: 3,
      name: "Training Room B",
      type: "Training Room",
      capacity: 20,
      amenities: ["Projector", "Sound System", "Flexible Seating"],
      location: "Floor 1",
      availability: "Available",
      icon: Users,
    },
    {
      id: 4,
      name: "Phone Booth 1",
      type: "Phone Booth",
      capacity: 1,
      amenities: ["Soundproof", "Power Outlet"],
      location: "Floor 2",
      availability: "Available",
      icon: Monitor,
    },
    {
      id: 5,
      name: "Cafeteria",
      type: "Dining",
      capacity: 50,
      amenities: ["Tables", "Microwave", "Coffee Machine"],
      location: "Floor 1",
      availability: "Open",
      icon: Coffee,
    },
    {
      id: 6,
      name: "Parking Spot A1",
      type: "Parking",
      capacity: 1,
      amenities: ["Covered", "EV Charging"],
      location: "Basement",
      availability: "Reserved",
      icon: Car,
    },
  ];

  const bookings = [
    {
      id: "BK-001",
      facility: "Conference Room A",
      date: "2024-03-26",
      time: "10:00 AM - 11:30 AM",
      purpose: "Team Standup",
      status: "Confirmed",
    },
    {
      id: "BK-002",
      facility: "Training Room B",
      date: "2024-03-28",
      time: "2:00 PM - 4:00 PM",
      purpose: "Product Demo",
      status: "Pending",
    },
  ];

  const getAvailabilityColor = (availability: string) => {
    switch (availability.toLowerCase()) {
      case "available":
        return "bg-nalco-green text-white";
      case "occupied":
        return "bg-nalco-red text-white";
      case "reserved":
        return "bg-yellow-500 text-white";
      case "open":
        return "bg-nalco-blue text-white";
      default:
        return "bg-nalco-gray text-white";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return "bg-nalco-green text-white";
      case "pending":
        return "bg-yellow-500 text-white";
      case "cancelled":
        return "bg-nalco-red text-white";
      default:
        return "bg-nalco-gray text-white";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/portal")}
              className="mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portal
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-nalco-black">
                Facilities
              </h1>
              <p className="text-nalco-gray">
                Book meeting rooms and facilities
              </p>
            </div>
          </div>
          <Button className="bg-nalco-red hover:bg-nalco-red/90">
            <Plus className="h-4 w-4 mr-2" />
            New Booking
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Quick Booking Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-nalco-black">Quick Booking</CardTitle>
              <CardDescription>Reserve a facility quickly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="facility">Facility</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select facility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conference-a">
                      Conference Room A
                    </SelectItem>
                    <SelectItem value="conference-b">
                      Conference Room B
                    </SelectItem>
                    <SelectItem value="training-a">Training Room A</SelectItem>
                    <SelectItem value="training-b">Training Room B</SelectItem>
                    <SelectItem value="phone-booth">Phone Booth</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>

              <div className="grid gap-4 grid-cols-2">
                <div>
                  <Label htmlFor="startTime">Start Time</Label>
                  <Input id="startTime" type="time" />
                </div>
                <div>
                  <Label htmlFor="endTime">End Time</Label>
                  <Input id="endTime" type="time" />
                </div>
              </div>

              <div>
                <Label htmlFor="purpose">Purpose</Label>
                <Textarea
                  id="purpose"
                  placeholder="Meeting purpose or description"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="attendees">Number of Attendees</Label>
                <Input id="attendees" type="number" placeholder="0" />
              </div>

              <Button className="w-full bg-nalco-blue hover:bg-nalco-blue/90">
                Book Facility
              </Button>
            </CardContent>
          </Card>

          {/* Available Facilities */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-nalco-black">
                Available Facilities
              </CardTitle>
              <CardDescription>
                Browse and book available facilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {facilities.map((facility) => {
                  const Icon = facility.icon;
                  return (
                    <Card
                      key={facility.id}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-nalco-blue/10">
                            <Icon className="h-5 w-5 text-nalco-blue" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-nalco-black">
                                {facility.name}
                              </h4>
                              <Badge
                                className={getAvailabilityColor(
                                  facility.availability,
                                )}
                              >
                                {facility.availability}
                              </Badge>
                            </div>
                            <p className="text-sm text-nalco-gray mb-2">
                              {facility.type} • {facility.location}
                            </p>
                            <p className="text-sm text-nalco-gray mb-2">
                              Capacity: {facility.capacity}{" "}
                              {facility.capacity === 1 ? "person" : "people"}
                            </p>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {facility.amenities.slice(0, 2).map((amenity) => (
                                <Badge
                                  key={amenity}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {amenity}
                                </Badge>
                              ))}
                              {facility.amenities.length > 2 && (
                                <Badge variant="outline" className="text-xs">
                                  +{facility.amenities.length - 2} more
                                </Badge>
                              )}
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full"
                              disabled={facility.availability === "Occupied"}
                            >
                              {facility.availability === "Available"
                                ? "Book Now"
                                : "View Details"}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* My Bookings */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-nalco-black">My Bookings</CardTitle>
              <CardDescription>
                Your upcoming facility reservations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex items-center justify-between border-b pb-4 last:border-b-0"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-nalco-green/10">
                        <Calendar className="h-6 w-6 text-nalco-green" />
                      </div>
                      <div>
                        <h4 className="font-medium text-nalco-black">
                          {booking.facility}
                        </h4>
                        <p className="text-sm text-nalco-gray">
                          {booking.date} • {booking.time}
                        </p>
                        <p className="text-sm text-nalco-gray">
                          {booking.purpose}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        Modify
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-nalco-red hover:text-nalco-red"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Facility Guidelines */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-nalco-black">
              Booking Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-medium text-nalco-black mb-2">
                  Booking Rules
                </h4>
                <ul className="text-sm text-nalco-gray space-y-1">
                  <li>• Book up to 2 weeks in advance</li>
                  <li>• Maximum 4 hours per booking</li>
                  <li>• Cancel at least 2 hours before</li>
                  <li>• Clean up after use</li>
                  <li>• Report any technical issues</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-nalco-black mb-2">
                  Available Hours
                </h4>
                <ul className="text-sm text-nalco-gray space-y-1">
                  <li>• Monday - Friday: 8:00 AM - 8:00 PM</li>
                  <li>• Saturday: 10:00 AM - 6:00 PM</li>
                  <li>• Sunday: Closed</li>
                  <li>• Holiday hours may vary</li>
                  <li>• Emergency access: Contact security</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
