"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SphereoftheSunsBase = require("../setMBS/SphereoftheSuns.js");

class SphereoftheSuns extends SphereoftheSunsBase {
  constructor(game) {
    super(game, "Sphere of the Suns", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = SphereoftheSuns;
