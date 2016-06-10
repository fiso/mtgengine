"use strict";
const Constants = require ("../../../Constants");
const AngelsFeatherBase = require("../setDST/AngelsFeather");

class AngelsFeather extends AngelsFeatherBase {
  constructor (game) {
    super(game, "Angel's Feather", "Ninth Edition", "9ED");
  }
}

module.exports = AngelsFeather;
