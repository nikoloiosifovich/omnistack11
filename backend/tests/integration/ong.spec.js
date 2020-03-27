describe("ONG Unique ID", () => {
  it("should be able to create a new ONG", () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});
