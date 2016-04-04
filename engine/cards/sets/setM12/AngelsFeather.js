"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelsFeatherBase = require("../setDST/AngelsFeather.js");

class AngelsFeather extends AngelsFeatherBase {
  constructor(game) {
    super(game, "Angel's Feather", "Magic 2012", "M12");
  }
}

module.exports = AngelsFeather;
