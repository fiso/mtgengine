"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SavannahLionsBase = require("../setCED/SavannahLions.js");

class SavannahLions extends SavannahLionsBase {
  constructor(game) {
    super(game, "Savannah Lions", "Unlimited Edition", "2ED");
  }
}

module.exports = SavannahLions;
