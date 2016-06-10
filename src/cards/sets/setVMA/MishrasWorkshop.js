"use strict";
const Constants = require ("../../../Constants");
const MishrasWorkshopBase = require("../setATQ/MishrasWorkshop");

class MishrasWorkshop extends MishrasWorkshopBase {
  constructor (game) {
    super(game, "Mishra's Workshop", "Vintage Masters", "VMA");
  }
}

module.exports = MishrasWorkshop;
