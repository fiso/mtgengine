"use strict";
const Constants = require ("../../../Constants");
const PhantasmalImageBase = require("../setMM3/PhantasmalImage");

class PhantasmalImage extends PhantasmalImageBase {
  constructor (game) {
    super(game, "Phantasmal Image", "Magic 2012", "M12");
  }
}

module.exports = PhantasmalImage;
