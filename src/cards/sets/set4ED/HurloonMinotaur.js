"use strict";
const Constants = require ("../../../Constants");
const HurloonMinotaurBase = require("../setCED/HurloonMinotaur");

class HurloonMinotaur extends HurloonMinotaurBase {
  constructor(game) {
    super(game, "Hurloon Minotaur", "Fourth Edition", "4ED");
  }
}

module.exports = HurloonMinotaur;
