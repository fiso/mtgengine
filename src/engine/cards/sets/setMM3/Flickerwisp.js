"use strict";
const Constants = require ("../../../Constants");
const FlickerwispBase = require("../setE01/Flickerwisp");

class Flickerwisp extends FlickerwispBase {
  constructor (game) {
    super(game, "Flickerwisp", "Modern Masters 2017", "MM3");
  }
}

module.exports = Flickerwisp;
