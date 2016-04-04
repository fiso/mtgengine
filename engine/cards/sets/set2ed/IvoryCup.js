"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IvoryCupBase = require("../set6ED/IvoryCup.js");

class IvoryCup extends IvoryCupBase {
  constructor(game) {
    super(game, "Ivory Cup", "Unlimited Edition", "2ED");
  }
}

module.exports = IvoryCup;
