"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrzasFactoryBase = require("../setpCMP/UrzasFactory.js");

class UrzasFactory extends UrzasFactoryBase {
  constructor(game) {
    super(game, "Urza's Factory", "Commander 2013 Edition", "C13");
  }
}

module.exports = UrzasFactory;
