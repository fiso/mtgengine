"use strict";
const Constants = require ("../../../Constants");
const WindseekerCentaurBase = require("../setPRM/WindseekerCentaur");

class WindseekerCentaur extends WindseekerCentaurBase {
  constructor (game) {
    super(game, "Windseeker Centaur", "HarperPrism Book Promos", "PHPR");
  }
}

module.exports = WindseekerCentaur;
