"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MishrasFactoryBase = require("../setATQ/MishrasFactory.js");

class MishrasFactory extends MishrasFactoryBase {
  constructor(game) {
    super(game, "Mishra's Factory", "Judge Gift Program", "pJGP");
  }
}

module.exports = MishrasFactory;
