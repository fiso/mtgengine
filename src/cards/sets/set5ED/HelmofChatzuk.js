"use strict";
const Constants = require ("../../../Constants");
const HelmofChatzukBase = require("../setCED/HelmofChatzuk");

class HelmofChatzuk extends HelmofChatzukBase {
  constructor (game) {
    super(game, "Helm of Chatzuk", "Fifth Edition", "5ED");
  }
}

module.exports = HelmofChatzuk;
