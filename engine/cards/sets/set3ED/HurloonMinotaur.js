"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HurloonMinotaurBase = require("../setCED/HurloonMinotaur.js");

class HurloonMinotaur extends HurloonMinotaurBase {
  constructor(game) {
    super(game, "Hurloon Minotaur", "Revised Edition", "3ED");
  }
}

module.exports = HurloonMinotaur;
