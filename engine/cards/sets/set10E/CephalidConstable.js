"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CephalidConstableBase = require("../setJUD/CephalidConstable.js");

class CephalidConstable extends CephalidConstableBase {
  constructor(game) {
    super(game, "Cephalid Constable", "Tenth Edition", "10E");
  }
}

module.exports = CephalidConstable;
