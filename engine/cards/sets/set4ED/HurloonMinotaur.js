"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HurloonMinotaurBase = require("../setCED/HurloonMinotaur.js");

class HurloonMinotaur extends HurloonMinotaurBase {
  constructor(game) {
    super(game, "Hurloon Minotaur", "Fourth Edition", "4ED");
  }
}

module.exports = HurloonMinotaur;
