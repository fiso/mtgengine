"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EncroachingWastesBase = require("../setpFNM/EncroachingWastes.js");

class EncroachingWastes extends EncroachingWastesBase {
  constructor(game) {
    super(game, "Encroaching Wastes", "Magic 2014 Core Set", "M14");
  }
}

module.exports = EncroachingWastes;
