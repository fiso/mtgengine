"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AvatarofWoeBase = require("../setARC/AvatarofWoe.js");

class AvatarofWoe extends AvatarofWoeBase {
  constructor(game) {
    super(game, "Avatar of Woe", "Pro Tour", "pPRO");
  }
}

module.exports = AvatarofWoe;
