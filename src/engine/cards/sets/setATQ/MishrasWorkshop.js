"use strict";
const Constants = require ("../../../Constants");
const MishrasWorkshopBase = require("../setVMA/MishrasWorkshop");

class MishrasWorkshop extends MishrasWorkshopBase {
  constructor (game) {
    super(game, "Mishra's Workshop", "Antiquities", "ATQ");
  }
}

module.exports = MishrasWorkshop;
