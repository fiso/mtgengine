"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IcatianStoreBase = require("../setFEM/IcatianStore.js");

class IcatianStore extends IcatianStoreBase {
  constructor(game) {
    super(game, "Icatian Store", "Fifth Edition", "5ED");
  }
}

module.exports = IcatianStore;
