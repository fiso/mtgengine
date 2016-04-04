"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CockatriceBase = require("../setCED/Cockatrice.js");

class Cockatrice extends CockatriceBase {
  constructor(game) {
    super(game, "Cockatrice", "Revised Edition", "3ED");
  }
}

module.exports = Cockatrice;
