const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get tour data from collection
  const tours = await Tour.find();

  // 2) Build template
  // 3) Render template using tour data from 1)

  res
    .status(200)
    .set('Content-Security-Policy', "connect-src 'self' https://unpkg.com")
    .render('overview', {
      title: 'All tours',
      tours,
    });
});

exports.getTour = catchAsync(async (req, res) => {
  // 1) Get the data,for the requiested tour (tours) & (including reviwes and guides
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  res
    .status(200)
    .set('Content-Security-Policy', "connect-src 'self' https://unpkg.com")
    .render('tour', {
      title: `${tour.name} tour`,
      tour,
    });
});

exports.getLoginForm = (req, res) => {
  res
    .status(200)
    .set(
      'Content-Security-Policy',
      "connect-src 'self' https://cdnjs.cloudflare.com",
    )
    .render('login', {
      title: 'Log into your account',
    });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account',
  });
};
