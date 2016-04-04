"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChorusofWoeBase = require("../setPO2/ChorusofWoe.js");

class ChorusofWoe extends ChorusofWoeBase {
  constructor(game) {
    super(game, "Chorus of Woe", "Starter 1999", "S99");
  }
}

module.exports = ChorusofWoe;
