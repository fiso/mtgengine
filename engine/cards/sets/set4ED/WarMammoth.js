"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarMammothBase = require("../setCED/WarMammoth.js");

class WarMammoth extends WarMammothBase {
  constructor(game) {
    super(game, "War Mammoth", "Fourth Edition", "4ED");
  }
}

module.exports = WarMammoth;
