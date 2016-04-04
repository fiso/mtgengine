"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HelmofChatzukBase = require("../setCED/HelmofChatzuk.js");

class HelmofChatzuk extends HelmofChatzukBase {
  constructor(game) {
    super(game, "Helm of Chatzuk", "Fourth Edition", "4ED");
  }
}

module.exports = HelmofChatzuk;
