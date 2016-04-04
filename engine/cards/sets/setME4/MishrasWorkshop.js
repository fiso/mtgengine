"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MishrasWorkshopBase = require("../setATQ/MishrasWorkshop.js");

class MishrasWorkshop extends MishrasWorkshopBase {
  constructor(game) {
    super(game, "Mishra's Workshop", "Masters Edition IV", "ME4");
  }
}

module.exports = MishrasWorkshop;
