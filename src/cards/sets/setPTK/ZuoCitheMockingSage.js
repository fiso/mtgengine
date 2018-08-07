"use strict";
const Constants = require ("../../../Constants");
const ZuoCitheMockingSageBase = require("../setPZ2/ZuoCitheMockingSage");

class ZuoCitheMockingSage extends ZuoCitheMockingSageBase {
  constructor (game) {
    super(game, "Zuo Ci, the Mocking Sage", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZuoCitheMockingSage;
