"use strict";
const Constants = require ("../../../Constants");
const IchigaWhoTopplesOaksBase = require("../setBOK/IchigaWhoTopplesOaks");

class IchigaWhoTopplesOaks extends IchigaWhoTopplesOaksBase {
  constructor(game) {
    super(game, "Ichiga, Who Topples Oaks", "Release Events", "pREL");
  }
}

module.exports = IchigaWhoTopplesOaks;
