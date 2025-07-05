export function Main() {
    function signupForm(formData){
        // let name=formData.get("fName");
        // let email=formData.get("email");
        // let password=formData.get("psw");
        // let description=formData.get("description");
        // let section=formData.get("section");
        // let education=formData.getAll("edu");
        // let favColor=formData.get("favColor")
        let dataExceptCheckbox=Object.fromEntries(formData);
        let education=formData.getAll("edu");
        let allData={...dataExceptCheckbox,edu:education}
        console.log(allData)
        // console.log(favColor)
    }
    return <section>
        <form action={signupForm}>
            <h1>Student Form</h1>
            <div className="input-div">
                <label htmlFor="yournName" >Name:</label>
                <input type="text" id="yournName" placeholder="Your Name" name="fName" required/><br />
            </div>

            <div className="input-div">
                <label htmlFor="mail">Email:</label>
                <input type="email" id="mail" placeholder="joe@gmai.com" name="email" required/> <br />
            </div>

            <div className="input-div">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="password" name="psw" required/><br />
            </div>

            <div className="input-div">
                <label htmlFor="description">Description: </label>
                <textarea id="description" name="description" required></textarea><br />
            </div>

            <div className="input-div">
                <fieldset>
                    <legend>Student Section</legend>
                    <div>
                        <label>
                            <input type="radio" name="section" value="A Section" />
                            :A Section
                        </label>
                        <label>
                            <input type="radio" name="section" value="B Section" />:B Section
                        </label>
                        <label>
                            <input type="radio" name="section" value="C Section" />:C Section<br />
                        </label>

                    </div>

                </fieldset>
            </div>

            <div className="input-div">
                <fieldset>
                    <legend>Education</legend>
                    <div>
                        <label>
                            <input type="checkbox" value="SSC" name="edu" />:SSC
                        </label>
                        <label>
                            <input type="checkbox" value="Inter" name="edu" />:Inter
                        </label>
                        <label>
                            <input type="checkbox" value="Degree" name="edu" />:Degree
                        </label>
                        <label>
                            <input type="checkbox" value="Graduate" name="edu" />:Graduate<br />
                        </label>

                    </div>

                </fieldset>

            </div>

            <div className="input-div">
                <label>Choose Your Favourite color</label>
                <select name="favColor" required>
                    <option value="" defaultChecked>---Choose the below--</option>
                    <option value="Green">Green</option>
                    <option value="red">red</option>
                    <option value="violet">violet</option>
                    <option value="pink">pink</option>
                    <option value="orange">orange</option>
                </select>
            </div>

            <button type="submit" className="submit-btn">Submit</button>

        </form>
    </section>
}