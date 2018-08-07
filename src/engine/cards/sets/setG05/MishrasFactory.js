"use strict";
const Constants = require ("../../../Constants");
const MishrasFactoryBase = require("../setA25/MishrasFactory");

class MishrasFactory extends MishrasFactoryBase {
  constructor (game) {
    super(game, "Mishra's Factory", "Judge Gift Cards 2005", "G05");
  }
}

module.exports = MishrasFactory;
