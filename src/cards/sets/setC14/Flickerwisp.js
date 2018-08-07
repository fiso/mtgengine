"use strict";
const Constants = require ("../../../Constants");
const FlickerwispBase = require("../setE01/Flickerwisp");

class Flickerwisp extends FlickerwispBase {
  constructor (game) {
    super(game, "Flickerwisp", "Commander 2014", "C14");
  }
}

module.exports = Flickerwisp;
