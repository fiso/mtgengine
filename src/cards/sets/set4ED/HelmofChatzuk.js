"use strict";
const Constants = require ("../../../Constants");
const HelmofChatzukBase = require("../set5ED/HelmofChatzuk");

class HelmofChatzuk extends HelmofChatzukBase {
  constructor (game) {
    super(game, "Helm of Chatzuk", "Fourth Edition", "4ED");
  }
}

module.exports = HelmofChatzuk;
