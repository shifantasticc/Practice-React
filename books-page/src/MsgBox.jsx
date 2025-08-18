// Activity Show a Hello Message to the user in different colors.
// Pass 2 values as props: userName & textColor

export default function MsgBox({ userName, textColor }) {
  let styles = { color: textColor };
  return (
    <div className="Msg" style={styles}>
      <h2>Hello {userName}</h2>
    </div>
  );
}
