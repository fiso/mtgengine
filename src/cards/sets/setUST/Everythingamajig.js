"use strict";
const Constants = require ("../../../Constants");
const EverythingamajigBase = require("../setUST/Everythingamajig");

class Everythingamajig extends EverythingamajigBase {
  constructor (game) {
    super(game, "Everythingamajig", "Unstable", "UST");
  }
}

module.exports = Everythingamajig;
