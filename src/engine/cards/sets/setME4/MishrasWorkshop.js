"use strict";
const Constants = require ("../../../Constants");
const MishrasWorkshopBase = require("../setVMA/MishrasWorkshop");

class MishrasWorkshop extends MishrasWorkshopBase {
  constructor (game) {
    super(game, "Mishra's Workshop", "Masters Edition IV", "ME4");
  }
}

module.exports = MishrasWorkshop;
