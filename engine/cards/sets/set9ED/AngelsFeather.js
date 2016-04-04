"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelsFeatherBase = require("../setDST/AngelsFeather.js");

class AngelsFeather extends AngelsFeatherBase {
  constructor(game) {
    super(game, "Angel's Feather", "Ninth Edition", "9ED");
  }
}

module.exports = AngelsFeather;
