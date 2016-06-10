"use strict";
const Constants = require ("../../../Constants");
const FlickerwispBase = require("../setC13/Flickerwisp");

class Flickerwisp extends FlickerwispBase {
  constructor (game) {
    super(game, "Flickerwisp", "Commander 2014", "C14");
  }
}

module.exports = Flickerwisp;
