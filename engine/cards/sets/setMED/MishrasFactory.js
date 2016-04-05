"use strict";
const Constants = require ("../../../Constants");
const MishrasFactoryBase = require("../setATQ/MishrasFactory");

class MishrasFactory extends MishrasFactoryBase {
  constructor(game) {
    super(game, "Mishra's Factory", "Masters Edition", "MED");
  }
}

module.exports = MishrasFactory;
