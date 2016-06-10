"use strict";
const Constants = require ("../../../Constants");
const HurloonMinotaurBase = require("../setCED/HurloonMinotaur");

class HurloonMinotaur extends HurloonMinotaurBase {
  constructor (game) {
    super(game, "Hurloon Minotaur", "Revised Edition", "3ED");
  }
}

module.exports = HurloonMinotaur;
