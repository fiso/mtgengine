"use strict";
const Constants = require ("../../../Constants");
const HurloonMinotaurBase = require("../setME3/HurloonMinotaur");

class HurloonMinotaur extends HurloonMinotaurBase {
  constructor (game) {
    super(game, "Hurloon Minotaur", "Collectors’ Edition", "CED");
  }
}

module.exports = HurloonMinotaur;
