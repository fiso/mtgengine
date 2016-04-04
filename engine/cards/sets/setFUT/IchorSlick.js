"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IchorSlickBase = require("../setDD3_GVL/IchorSlick.js");

class IchorSlick extends IchorSlickBase {
  constructor(game) {
    super(game, "Ichor Slick", "Future Sight", "FUT");
  }
}

module.exports = IchorSlick;
