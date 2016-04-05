"use strict";
const Constants = require ("../../../Constants");
const IcatianStoreBase = require("../setFEM/IcatianStore");

class IcatianStore extends IcatianStoreBase {
  constructor(game) {
    super(game, "Icatian Store", "Fifth Edition", "5ED");
  }
}

module.exports = IcatianStore;
