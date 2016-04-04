"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlickerwispBase = require("../setC13/Flickerwisp.js");

class Flickerwisp extends FlickerwispBase {
  constructor(game) {
    super(game, "Flickerwisp", "Commander 2014", "C14");
  }
}

module.exports = Flickerwisp;
