"use strict";
const Constants = require ("../../../Constants");
const AngelsFeatherBase = require("../setDVD/AngelsFeather");

class AngelsFeather extends AngelsFeatherBase {
  constructor (game) {
    super(game, "Angel's Feather", "Magic 2012", "M12");
  }
}

module.exports = AngelsFeather;
